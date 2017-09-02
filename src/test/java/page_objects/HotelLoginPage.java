package page_objects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class HotelLoginPage extends HotelLandingPage {

    public HotelLoginPage(WebDriver driver){ super(driver); }

    public void userId(String userName){ driver.findElement(By.id("username")).sendKeys(userName); }

    public void password(String password){ driver.findElement(By.id("password")).sendKeys(password); }

    public HotelHomePage login(){ driver.findElement(By.id("doLogin")).click();
        return new HotelHomePage(driver); }
}



