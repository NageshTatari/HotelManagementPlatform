package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HotelLandingPage {

    protected WebDriver driver;
    String login = "html/body/div[1]/nav/div[1]/ul/li[2]/a";

    public HotelLandingPage(WebDriver driver){ this.driver= driver; }

    public WebDriver getDriver() { return driver;}

    public HotelLoginPage navigateToHotelLandingPage(){

        driver.get("http://localhost:3003");
        driver.findElement(By.xpath(login)).click();
        return new HotelLoginPage(driver);
    }


}
