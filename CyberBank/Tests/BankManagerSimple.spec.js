require('../Utilities/CustomLocators.js');
var HomePage=require('../Pages/Home.page.js');
var BankManagerPage=require('../Pages/BankManager.page.js');
var Base=require('../Utilities/Base.js');
var AddCustomerPage=require('../Pages/AddCustomerPage.page.js');
var Customers=require('../Pages/Customers.page.js');
var BankData=require('../TestData/Bankdata.json');

describe('Bank Manager',()=>{

    describe('Manager Login',()=>{

        beforeEach(()=>{
            Base.navigateToHome();
    
        });
    
        it('should have a correct page title',()=>{
            expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
        });
    
        it('should display home button',()=>{
            expect(HomePage.homeButton.isDisplayed()).toBe(true);
            expect(HomePage.homeButton.getText()).toEqual('Home');
        });
    
        it('should display page header',()=>{
            expect(HomePage.pageHeader.isDisplayed()).toBe(true);
            expect(HomePage.pageHeader.getText()).toEqual('XYZ Bank');
        });

        it('should display page header',()=>{
            expect(HomePage.pageHeader.isDisplayed()).toBe(true);
            expect(HomePage.pageHeader.getText()).toEqual(BankData.appData.bankName);
        });
    
        it('should display login button for Bank Manager',()=>{
            expect(HomePage.managerLoginButton.isDisplayed()).toBe(true);
            expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        });
    
        it('should stay at homepage when home button is clicked',()=>{
            $('button.home').click();
            expect(browser.getTitle()).toEqual('Protractor practice website - Banking App');
            expect(HomePage.managerLoginButton.getText()).toEqual('Bank Manager Login');
        });
    
        it('should login as a Bank Manager',()=>{
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
        });
    
        it('should confirm all buttons are present',()=>{
            HomePage.managerLoginButton.click();
            expect(BankManagerPage.addCustomerButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.openAccountButton.isDisplayed()).toBe(true);
            expect(BankManagerPage.customersButton.isDisplayed()).toBe(true);
        });
    
        it('should take us back to home page',()=>{
            HomePage.managerLoginButton.click();
            HomePage.homeButton.click();
            expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        });
    
    
    });



    // describe('Adding a customer',()=>{
    //     beforeAll(function(){
    //         Base.navigateToHome();
    //         HomePage.managerLoginButton.click();
    //         AddCustomerPage.goToAddCustomer();
    //     });

    //     it('should display form for Adding Customer',()=>{
    //         expect(AddCustomerPage.customerForm.isDisplayed()).toBe(true);
    //         expect(AddCustomerPage.formLabels.count()).toEqual(3);
    //     });

    //     it('should list all the labels',()=>{
    //         expect(AddCustomerPage.formLabels.get(0).getText()).toEqual('First Name :');
    //         expect(AddCustomerPage.formLabels.get(1).getText()).toEqual('Last Name :');
    //         expect(AddCustomerPage.formLabels.get(2).getText()).toEqual('Post Code :');
    //     });

    //     it('should require firstname',()=>{
    //         expect(AddCustomerPage.formRequiredFields.get(0).getAttribute('required')).toEqual('true');
    //     });

    //     it('should require lastname',()=>{
    //         expect(AddCustomerPage.formRequiredFields.get(1).getAttribute('required')).toEqual('true');
    //     });

    //     it('should require postcode',()=>{
    //         expect(AddCustomerPage.formRequiredFields.get(2).getAttribute('required')).toEqual('true');
    //     });

    //     it('should add customer',()=>{
    //         for(let i=0; i<BankData.customers.length;i++){
    //             AddCustomerPage.firstNameInputBox.sendKeys(BankData.customers[i].fName);
    //             AddCustomerPage.lastNameInputBox.sendKeys(BankData.customers[i].lName);
    //             AddCustomerPage.postalCodeInputBox.sendKeys(BankData.customers[i].pCode);
    //             AddCustomerPage.formAddCustomerButton.click();
    //             expect(browser.switchTo().alert().getText()).
    //             toContain('Customer added successfully with customer id :');
    //             browser.switchTo().alert().accept();
    //         }
    //         // BankManagerPage.customersButton.click();
    //         // browser.sleep(5000);
    //     });

    //     it('should display new customer first name that was created',()=>{
    //         BankManagerPage.customersButton.click();
    //         expect(Customers.getLastRowValue(1).getText()).toEqual(BankData.customers[2].fName);
    //     });

    //     it('should display new customer last name that was created',()=>{
    //         expect(Customers.getLastRowValue(2).getText()).toEqual('Bezos');
    //     });

    //     it('should display new customer post code that was created',()=>{
    //         expect(Customers.getLastRowValue(3).getText()).toEqual('98059');
    //     });

    //     it('should have no account number for ther user that was created',()=>{
    //         expect(Customers.getLastRowValue(4).getText()).toEqual('');
    //     });




    // });


});



