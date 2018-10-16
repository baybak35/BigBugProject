require('../Utilities/customLocators.js');
var BankManagerPage = require('../Pages/BankManager.page.js');

var addCustomer = function(){

    this.formLabels = $$('.form-group>label');
    this.firstName = element(by.model('fName'));
    this.lastName = element(by.model('lName'));
    this.postCode = element(by.model('postCd'));
    this.formRequiredFields = element.all(by.css('input:required'));
    this.formAddCustomerButton = $('.btn-default');
    this.customerForm = element(by.name('myForm'))


    this.goToAddCustomer = function(){
        BankManagerPage.addCustomerButton.click();
    };

};
module.exports = new addCustomer();