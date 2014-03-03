try{ var base = window; }catch( error ){ base = exports; }
( function module( base ){
	define( "absurdReset",
		[
			"arbiter",
			"jquery",
			"absurd",
			"absurdCompiler",
			"chance"
		],
		function construct( ){
			requirejs.config( {
				"paths": {
					"resetCSS": staticBaseURL + "/absurd-reset/reset-css"
				}
			} );
			requirejs( [
					"resetCSS"
				],
				function construct( resetCSS ){
					var absurdReset = function absurdReset( ){
						var absurd = Absurd( );
						absurd.add( resetCSS ).compile( absurdCompiler( "reset-css", chance.guid( ) ) );
					};
					base.absurdReset = absurdReset;
					Arbiter.publish( "module-loaded:absurd-reset", null, { "persist": true } );
				} );

			return ( function onModuleLoaded( handler ){
				Arbiter.subscribe( "module-loaded:absurd-reset", handler );
			} );
		} );
} )( base );