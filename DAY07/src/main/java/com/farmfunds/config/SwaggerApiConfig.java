package com.farmfunds.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class SwaggerApiConfig {

    @Bean
public OpenAPI defineOpenApi() {
        Server server = new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("FarmFunds Backend");

        Info info = new Info()
                        .title("FarmFunds")
                        .version("1.1")
                        .description("FarmFunds swagger configuration testing.");

        SecurityScheme securityScheme = new SecurityScheme()
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .description("Provide the JWT token")
                        .bearerFormat("JWT");

        Components components = new Components().addSecuritySchemes("bearerAuth", securityScheme);

        SecurityRequirement securityRequirement = new SecurityRequirement().addList("bearerAuth");

        return new OpenAPI()
                        .info(info)
                        .servers(Arrays.asList(server))
                        .components(components)
                        .addSecurityItem(securityRequirement);
}
}
