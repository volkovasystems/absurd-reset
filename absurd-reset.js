try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "absurdReset",
		[
			"absurd",
			"absurdCompiler"
		],
		function construct( ){
			requirejs.config( {
				"paths": {
					"resetCSS": "/absurd-reset/reset-css"
				}
			} );

			requirejs( [
					"resetCSS"
				],
				function construct( resetCSS ){
					var absurdReset = function absurdReset( ){
						var absurd = Absurd( );
						absurd.add( resetCSS ).compile( absurdCompiler( "reset-css", GUID ) );
					};
					base.absurdReset = absurdReset;
				} );
		} );
} )( base );