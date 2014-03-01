try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "absurdReset",
		[
			"jquery",
			"absurd",
			"absurdCompiler",
			"chance",
			"Contract"
		],
		function construct( ){
			requirejs.config( {
				"paths": {
					"resetCSS": staticBaseURL + "/absurd-reset/reset-css"
				}
			} );
			var contract = new Contract( );
			requirejs( [
					"resetCSS"
				],
				function construct( resetCSS ){
					var absurdReset = function absurdReset( ){
						var absurd = Absurd( );
						absurd.add( resetCSS ).compile( absurdCompiler( "reset-css", chance.guid( ) ) );
					};
					base.absurdReset = absurdReset;
					console.log( "absurdReset called!" );
					contract.agree( );
				} );
			return contract;
		} );
} )( base );