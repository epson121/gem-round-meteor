
Tinytest.add('Is npm round-node available?', function( test ) {
  var type = typeof Round.client();
  test.equal( type, "object" );
});