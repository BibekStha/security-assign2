describe("Username and Password validation function", function(){
    describe("Test to Pass", function(){
        it("Should return 'true'", function() {
            var testUsername = "bibek";
            var testPassword = "imironman";
            expect(checkLogin(testUsername, testPassword)).toEqual(true);
        });
    });

    describe("Test to Fail", function(){
        it("Should return 'Invalid Username or Password.'", function(){
            var testUsername = "Bibek";
            var testPassword = "imironman";
            expect(checkLogin(testUsername, testPassword)).toEqual("Invalid Username or Password.");
        });
        it("Should return 'Invalid Username or Password.'", function(){
            var testUsername = "bibek";
            var testPassword = "Imironman";
            expect(checkLogin(testUsername, testPassword)).toEqual("Invalid Username or Password.");
        });
        it("Should return 'Invalid Username or Password.'", function(){
            var testUsername = "Bibek";
            var testPassword = "Imironman";
            expect(checkLogin(testUsername, testPassword)).toEqual("Invalid Username or Password.");
        });
        it("Should return 'No username entered.'", function(){
            var testUsername = "";
            var testPassword = "Imironman";
            expect(checkLogin(testUsername, testPassword)).toEqual("No username entered.");
        });
        it("Should return 'No username entered.'", function(){
            var testUsername = "";
            var testPassword = "";
            expect(checkLogin(testUsername, testPassword)).toEqual("No username entered.");
        });
        it("Should return 'No password entered.'", function(){
            var testUsername = "bibek";
            var testPassword = "";
            expect(checkLogin(testUsername, testPassword)).toEqual("No password entered.");
        });
    });
})