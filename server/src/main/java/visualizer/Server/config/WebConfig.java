package visualizer.Server.config;

import org.springframework.lang.NonNull;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/api/**")
                .allowedOrigins(ConfigConstants.clientURL)
                .allowedMethods("GET", "POST", "DELETE", "PATCH")
                .allowedHeaders("Content-Type", "Origin", "Accept", "Authorization")
                .allowCredentials(true);
    }
}
