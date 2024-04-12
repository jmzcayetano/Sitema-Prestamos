package com.sistema.prestamos;

import com.sistema.prestamos.servicios.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class SistemaPrestamosBackendApplication implements CommandLineRunner {

	@Autowired
	private UsuarioService usuarioService;

	public static void main(String[] args) {
		SpringApplication.run(SistemaPrestamosBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

	}
}
