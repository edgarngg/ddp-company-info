import { CompanyInfo } from 'meteor/igoandsee:company-info-collection';
import { Action } from 'meteor/igoandsee:action-collection';

Meteor.methods ({
  publishCompanyInfo : function () {
    let query = {}
    let data = CompanyInfo.findOne();
    let actions = Action.findOne();

    let info = {
      companydata : data,
      actions : actions
    }
    return info
  }
})