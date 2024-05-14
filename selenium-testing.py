from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

driver.get("https://deployfor.me")

repo_input = driver.find_element_by_xpath("//input[@placeholder='https://github.com/profile/react-project']")
repo_input.send_keys("https://github.com/Patel-Muhammad/react-boilerplate-test")

domain_input = driver.find_element_by_xpath("//input[@placeholder='mycoolproject']")
domain_input.send_keys("testdomain")

deploy_button = driver.find_element_by_xpath("//button[contains(@class, 'bg-gray-100')]")
deploy_button.click()

time.sleep(30)

driver.get("http://testdomain.deployfor.me")

if "Test Project" in driver.title: # Adjust the title as per your project
    print("Deployment successful")
else:
    print("Deployment failed")

driver.quit()
