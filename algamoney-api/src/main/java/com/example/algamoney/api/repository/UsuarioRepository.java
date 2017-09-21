package com.example.algamoney.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.algamoney.api.model.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	// Optional é para se não encontrar não precisa validar se é diferente de nulo (abordagem mais orientada a objetos)
	public Optional<Usuario> findByEmail(String email);
	
}
