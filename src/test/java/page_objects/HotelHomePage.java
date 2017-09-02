package page_objects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HotelHomePage extends HotelLandingPage {

    public HotelHomePage(WebDriver driver){ super(driver);}

    public void hotelName(String hotelName ){
        WebDriverWait wait = new WebDriverWait(driver, 30);
        wait.until(ExpectedConditions.elementToBeClickable(driver.findElement(By.id("hotelName"))));
        driver.findElement(By.id("hotelName")).sendKeys(hotelName);
    }

    public void address(String address){ driver.findElement(By.id("address")).sendKeys(address);}

    public void owner(String owner){ driver.findElement(By.id("owner")).sendKeys(owner); }

    public void phoneNumber(String phoneNumber){driver.findElement(By.id("phone")).sendKeys(phoneNumber); }

    public void emailId(String emailId){ driver.findElement(By.id("email")).sendKeys(emailId); }

    public void hotelCreate(){driver.findElement(By.id("createHotel")).click(); }

    public void hotelDelete(){driver.findElement(By.xpath("//*[contains(@class,'glyphicon glyphicon-remove hotelDelete')]")).click();}

    public void verifyHotelDeleted(String hotel){ Assert.assertFalse(driver.getPageSource().contains(hotel));}

    public void verifyHotelCreated(String hotel){ Assert.assertTrue(driver.getPageSource().contains(hotel));}

}


