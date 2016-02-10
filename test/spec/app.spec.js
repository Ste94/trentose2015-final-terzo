/* Remember that blanket will only work with brackets live preview */
/* Try to maximise the coverage of the ParlaModel object */

describe("Parla", function() {
    describe("getLanguageScore", function() {

        it("should properly return null if the language is not valid", function() {  
            expect(Parla.getLanguageScore("the best","aka")).toBe(null);
        }); 
        
        it("should properly return the number of matches", function() {  
            expect(Parla.getLangaugeScore("the best","English")).toBe(1);
            expect(Parla.getLanguageScore("the best","Italian")).toBe(0);
        }); 
        
        
    }); 
    
    describe("detectLanguage", function() {

        it("should properly return the right language", function() {  
            expect(Parla.detectLanguage("the best").toBe("English");
            expect(Parla.detectLanguage("il migliore").toBe("Italian");
            expect(Parla.detectLanguage("el mejo").toBe("Spanish");
        }); 
    }); 
 
 
});


 
 

