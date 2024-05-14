from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome(executable_path="./chromedriver")
driver.get("https://deployfor.me")

time.sleep(15)

repo_input = driver.find_element(By.CLASS_NAME, "github-url")
repo_input.send_keys("https://github.com/Patel-Muhammad/react-boilerplate-test")

domain_input = driver.find_element(By.CLASS_NAME, "domain-name")
domain_input.send_keys("testdomain")

deploy_button = driver.find_element(By.CLASS_NAME, "deploy-button")
deploy_button.click()

time.sleep(60)

driver.get("http://testdomain.deployfor.me")

if "Test Project" in driver.title:
    print("Deployment successful")
else:
    print("Deployment failed")

driver.quit()
