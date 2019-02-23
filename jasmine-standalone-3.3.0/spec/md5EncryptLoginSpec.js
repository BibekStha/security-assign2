describe("Encryption function", function(){
    describe("Test to Pass", function(){
        it("Should return '^/(\d|\w){32}$/'", function() {
            var testPassword = "imironman";
            expect(md5Encrypt(testPassword)).toMatch(/^(\d|\w){32}$/);
        });
    });
})