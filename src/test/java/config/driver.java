package config;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class driver  {

    protected static WebDriver driver;

    protected WebDriver getDriver(){

        if (driver != null){

            driver.close();
        }

        driver = null;

        if(driver == null){

            String environmentType = System.getProperty("environment", "localhost");
            String browserType = System.getProperty("browser", "firefox");

            if ("localhost".equals(environmentType)){

                if ("firefox".equals(browserType)){

                    System.setProperty("webdriver.gecko.driver","lib/geckodriver.exe");
                        driver = new FirefoxDriver();
                }
                if ("chrome".equals(browserType)){

                    //need implementation
                }
            }

            if ("Dev".equals(environmentType)){

                if ("firefox".equals(browserType)){

                    System.setProperty("webdriver.gecko.driver","lib/geckodriver.exe");
                    driver = new FirefoxDriver();
                }
                if ("chrome".equals(browserType)){

                    //need implementation
                }
            }

        }



        return driver;
    }

}
