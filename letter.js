function Letter(string, guessed) {
    this.string = string
    this.guessed = false
    this.display = function() {
        if (guessed){
            return this.string
        } else {
            return "_"
        }
    }
    
    this.check = function(guess) {
        if (guess === this.string) {
            this.guessed = true
        }
    }
}

module.exports = Letter