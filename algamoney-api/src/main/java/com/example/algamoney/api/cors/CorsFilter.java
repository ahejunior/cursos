package com.example.algamoney.api.cors;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.example.algamoney.api.config.property.AlgamoneyApiProperty;

/**
 * @author alvimar.henriques 
 * Por razões de segurança, os navegadores restringem solicitações HTTP de origem cruzada iniciadas a partir de scripts.
 * O mecânismo de Compartilhamento de Recursos entre Origens (CORS) fornece aos servidores de web controles de acesso entre domínios, 
 * que permitem transferências seguras de dados entre domínios. Os navegadores modernos usam o CORS em um container API - como XMLHttpRequest 
 * ou Fetch - Para mitigar os riscos de pedidos HTTP de origem cruzada.
 * 
 * CORS adiciona Headers HTTP (Access-Control)
 * 
 */

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CorsFilter implements Filter {

	@Autowired
	private AlgamoneyApiProperty algamoneyApiProperty; 
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		
		HttpServletRequest request = (HttpServletRequest) req;
		HttpServletResponse response = (HttpServletResponse) resp;
		
		/*** Os dois headers abaixo foram disponibilizado pois sempre tem que ser inserido, independente do método. */
		
		//Header que validará a origem permitida 
		response.setHeader("Access-Control-Allow-Origin", algamoneyApiProperty.getOrigemPermitida());
		
		//Header abaixo configurado para enviar o cookie do refresh-token
		response.setHeader("Access-Control-Allow-Credentials", "true");
		
		// Se origemPermitida = origem que veio do browser e método que veio foi o OPTIONS 
		if( "OPTIONS".equals(request.getMethod()) && algamoneyApiProperty.getOrigemPermitida().equals(request.getHeader("Origin")) ) {
			response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
			response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept");
			//Tempo que o browser fará a próxima requisição
			response.setHeader("Access-Control-Max-Age", "3600");
			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			chain.doFilter(req, resp);
		}
		
	}
	
	@Override
	public void destroy() {
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
	}

}
