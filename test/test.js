var expect = require('chai').expect;

describe('ebanc-js', function() {
	
	var Ebanc = require('../index.js');
	
	describe('requiring and instantiating', function() {
		it('should not blow up when required', function() {
			expect(Ebanc).to.not.be.undefined;
		});
	
		it('should create object successfully when NOT using "new"', function() {
			
			var apiKey 		= '1234';
			var gatewayId = '4321';
			var ebanc = Ebanc(apiKey, gatewayId)
			
			expect(ebanc).to.be.instanceof(Ebanc);
		});
		
		it('should create object successfully when using "new"', function() {
			
			var apiKey 		= '1234';
			var gatewayId = '4321';
			var ebanc = new Ebanc(apiKey, gatewayId)

			expect(ebanc).to.be.instanceof(Ebanc);
		});
	});

	describe('getCustomers', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('getCustomer', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('createCustomers', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('updateCustomers', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('getTransactions', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('getTransaction', function() {
		it('', function() {
		
			//spotexpect()
		});
	});

	describe('createTransaction', function() {
		it('', function() {
		
			//expect()
		});
	});

	describe('createTransactionForCustomer', function() {
		it('', function() {
		
			//expect()
		});
	});
});