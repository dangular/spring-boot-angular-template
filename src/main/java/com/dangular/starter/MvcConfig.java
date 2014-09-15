package com.dangular.starter;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * Author: Dan Hayes
 * Company: Chariot Solutions
 * Email: dhayes@chariotsolutions.com
 * Date: 9/11/14
 * Time: 3:06 PM
 */
@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/contact").setViewName("index");
        registry.addViewController("/about").setViewName("index");
    }

}
