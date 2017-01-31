"use strict";
/**
 * AP Style Title Case property name resolver.
 * @param name Property name.
 */
var ApStyleTitleCasePropertyNameResolver = function (name) {
    if (!name)
        return null;
    if (!name.length)
        return null;
    var stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ');
    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    var words = name.split(/(?=[A-ZА-Я])/);
    return words
        .map(function (word, index) {
        if (index === 0)
            return capitalize(word);
        if (index === words.length - 1)
            return capitalize(word);
        if (stopwords.indexOf(word.toLowerCase()) > -1)
            return word.toLowerCase();
        return capitalize(word);
    })
        .join(' ');
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ApStyleTitleCasePropertyNameResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yZXNvbHZlcnMvYXAtc3R5bGUtcHJvcGVydHktbmFtZS1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUE7OztHQUdHO0FBQ0gsSUFBSSxvQ0FBb0MsR0FBeUIsVUFBQyxJQUFZO0lBQzFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQUMsTUFBTSxDQUFDLElBQUksQ0FBQTtJQUN0QixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFBQyxNQUFNLENBQUMsSUFBSSxDQUFBO0lBRTdCLElBQU0sU0FBUyxHQUFHLHlEQUF5RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUV0RixvQkFBb0IsR0FBRztRQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXZDLE1BQU0sQ0FBQyxLQUFLO1NBQ1AsR0FBRyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7UUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDO1lBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN4QyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ3pFLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2xCLENBQUMsQ0FBQTtBQUVEO2tCQUFlLG9DQUFvQyxDQUFDIiwiZmlsZSI6InNyYy9yZXNvbHZlcnMvYXAtc3R5bGUtcHJvcGVydHktbmFtZS1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wZXJ0eU5hbWVSZXNvbHZlciBmcm9tIFwiLi9wcm9wZXJ0eS1uYW1lLXJlc29sdmVyXCI7XHJcblxyXG4vKipcclxuICogQVAgU3R5bGUgVGl0bGUgQ2FzZSBwcm9wZXJ0eSBuYW1lIHJlc29sdmVyLlxyXG4gKiBAcGFyYW0gbmFtZSBQcm9wZXJ0eSBuYW1lLlxyXG4gKi9cclxudmFyIEFwU3R5bGVUaXRsZUNhc2VQcm9wZXJ0eU5hbWVSZXNvbHZlcjogUHJvcGVydHlOYW1lUmVzb2x2ZXIgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGxcclxuICAgIGlmICghbmFtZS5sZW5ndGgpIHJldHVybiBudWxsXHJcblxyXG4gICAgY29uc3Qgc3RvcHdvcmRzID0gJ2EgYW4gYW5kIGF0IGJ1dCBieSBmb3IgaW4gbm9yIG9mIG9uIG9yIHNvIHRoZSB0byB1cCB5ZXQnLnNwbGl0KCcgJylcclxuXHJcbiAgICBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd29yZHMgPSBuYW1lLnNwbGl0KC8oPz1bQS1a0JAt0K9dKS8pO1xyXG5cclxuICAgIHJldHVybiB3b3Jkc1xyXG4gICAgICAgIC5tYXAoKHdvcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgcmV0dXJuIGNhcGl0YWxpemUod29yZClcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSB3b3Jkcy5sZW5ndGggLSAxKSByZXR1cm4gY2FwaXRhbGl6ZSh3b3JkKVxyXG4gICAgICAgICAgICBpZiAoc3RvcHdvcmRzLmluZGV4T2Yod29yZC50b0xvd2VyQ2FzZSgpKSA+IC0xKSByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgIHJldHVybiBjYXBpdGFsaXplKHdvcmQpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuam9pbignICcpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwU3R5bGVUaXRsZUNhc2VQcm9wZXJ0eU5hbWVSZXNvbHZlcjsiXX0=
