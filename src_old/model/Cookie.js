export class Cookie {

    static get(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match) return match[2];        
    }

    static get1(name) {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");
        // Loop through the array elements
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        } 
        // Return null if not found
        return null;
    }
   
    static set(name, value, expires, path, domain, secure) {
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (expires instanceof Date) {
        cookieText += `; expires=${expires.toGMTString()}`;
      }
   
      if (path) cookieText += `; path=${path}`;
      if (domain) cookieText += `; domain=${domain}`;
      if (secure) cookieText += `; secure`;
   
      document.cookie = cookieText;
    }
   
    static remove(name, path, domain, secure) {
      Cookie.set(name, '', new Date(0), path, domain, secure);
    }

  }

/* //Use Cookie

// set a cookie
Cookie.set('username', 'admin');
 
// get a cookie
console.log(Cookie.get('username')); // admin
 
// remove a cookie by a name
Cookie.remove('username');
*/   