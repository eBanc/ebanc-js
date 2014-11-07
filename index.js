
var request = require('request');
var url = 'http://something.com/api/v1'

/**
 * Ebanc javascript API wrapper
 *
 * @author Tom Caflisch
 */
function Ebanc(apiKey, gatewayId) {
	
	this.apiKey 		= apiKey;
	this.gatewayId 	= gatewayId;

	// If a new object wasn't instantiated, do it for them
	if(!(this instanceof Ebanc)) {
		return new Ebanc(apiKey, gatewayId);
	};
}

/**********************************
*	Customers
**********************************/
	
/**
 * Get all customers
 *	
 * @return	- array of Customer Objects by Hash
 */
Ebanc.prototype.getCustomers = function() {
	request.get(url + '/customers', function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}	
	});
}

/**
 * Get a specific customer
 *
 * @param	uuid	-	The id of the customer to fetch
 * @return			- A Customer Object
 */
Ebanc.prototype.getCustomer = function(uuid) {
	request.get(url + '/customers/' + uuid, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**
 * Create a customer
 *
 * @param	firstName			- The first name of the customer
 * @param lastName			- The last name of the customer
 * @param routingNumber	- The routing number of the customer's account
 * @param accountNumber	- The account number of the customer's account
 * @return							- Customer Object
 */
Ebanc.prototype.createCustomer = function(firstName, lastName, routingNumber, accountNumber) {
	
	var data = {
		first_name: firstName,
		last_name: lastName,
		routing_number: routingNumber,
		account_number: accountNumber
	};
	
	request.post({url: url + '/customers/', form: data}, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**
 * Update a customer
 *
 * @param	uuid					-	The id of the customer to update
 * @param	firstName			- The first name of the customer
 * @param lastName			- The last name of the customer
 * @param routingNumber	- The routing number of the customer's account
 * @param accountNumber	- The account number of the customer's account
 * @return							- Customer Object
 */
Ebanc.prototype.updateCustomer = function(uuid, firstName, lastName, routingNumber, accountNumber) {
	
	var data = {
		first_name: firstName,
		last_name: lastName,
	};
	
	if(routingNumber) {
		data.routing_number = routingNumber;
	}
	if(accountNumber) {
		data.account_number = accountNumber;
	}
	
	request.patch({url: url + '/customers/' + uuid, form: data}, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**********************************
*	Transactions
**********************************/

/**
 * Get the last 50 transactions
 *
 * @return	- array of Transaction Objects by Hash
 */
Ebanc.prototype.getTransactions = function() {
	request.get(url + '/transactions', function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**
 * Get a specific transaction
 *
 * @param	uuid	-	The id of the transaction to fetch
 * @return			- A Transaction Object
 */
Ebanc.prototype.getTransaction = function(uuid) {
	request.get(url + '/transactions/' + uuid, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**
 * Create a transaction
 *
 * @param	firstName			- The first name of the customer
 * @param lastName			- The last name of the customer
 * @param routingNumber	- The routing number of the customer's account
 * @param accountNumber	- The account number of the customer's account
 * @param amount				- The amount of the transaction
 * @param category			- The category of the transaction
 * @param memo					- A memo to be recorded with the transaction
 * @return							- Customer Object
 */
Ebanc.prototype.createTransaction = function(firstName, lastName, routingNumber, accountNumber, amount, category, memo) {
	
	var data = {
		first_name: firstName,
		last_name: lastName,
		routing_number: routingNumber,
		account_number: accountNumber,
		amount: amount,
		category: category,
		memo: memo
	};
	
	request.post({url: url + '/transactions/', form: data}, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

/**
 * Create transaction for a customer
 *
 * @param	customerUuid	-	The id of the customer to create a transaction for
 * @param amount				- The amount of the transaction
 * @param category			- The category of the transaction
 * @param memo					- A memo to be recorded with the transaction
 * @return							- Customer Object
 */
Ebanc.prototype.createTransactionForCustomer = function(customerUuid, amount, category, memo) {
	
	var data = {
		customer_uuid: customerUuid,
		amount: amount,
		category: category,
		memo: memo
	};
	
	request.post({url: url + '/transactions/', form: data}, function(err, res, body) {
		if(!err && response.statusCode == 200) {
			console.log(body);
		}
	});
}

module.exports = Ebanc;