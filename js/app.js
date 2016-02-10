var ParlaModel = {
  
   /* Langs contain the list of language with their corresponding
    * dictionaries 
    */
   langs : languages, 
    
    
  
   /* Returns the score of the given phrase in the given language
    * The score is computed simply as the number of words - in the
    * language dictionary - that are found in the phrase
    * @return score, if language is valid
    *         null, if language is not valid
    */
   getLanguageScore : function (phrase, language){
     // write your code here, but don't add any additional 
     // parameters to the the function
       
       if(ParlaModel.langs.indexOf(language) != -1){
           
            var dictionary = ParlaModel.langs[ParlaModel.langs.indexOf(language)].dictionary;
           
            console.log(dictionary); 
           
            var res = 0;
           
            var parole = phrase.split(" ");
            
            for (var i = 0; i<parole.length; i++){
                
            } 
           
       } else return null;
   },
  
   /* Returns the name of the language in which the phrase
    * (most likely) is written. The detection essentially 
    * returns the language with higher *score*. 
    */
   detectLanguage : function (phrase) {
     // write your code here, but don't add any additional 
     // parameters to the the function     
       
       var e, i, s;
       e = getlanguageScore(phrase, "English");
       i = getLanguageScore(phrase, "Italian");
       s = getLanguageScore(phrase, "Spanish");
       
        if ((e>=i) && (e>=s)) {
            return "English";
        } else if ((i>e) && (i>=s))  {
            return "Italian";
        } else if ((s>e) && (s>i)) {
            return "Spanish";
        }
        
    }
       
   
         
};

var View = {
    
};

var Octopus = {
    
};

$(document).ready(function(){
   console.log(ParlaModel.getLanguageScore("the best","Italian"));
    //Octopus.init();
});

