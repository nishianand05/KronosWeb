# KRONOS LOGISTICS WEBSITE

* Page type - Static 
* Front end - HTML, CSS, Bootstrap framework.
* Back end - Node.js, express framework.

## === Routes ===

1. Landing page               - "/"                    - GET
2. Home page                  - "/home"                - GET
3. Our services page          - "/services"            - GET
4. Value added solutions page - "/valueAddedSolutions" - GET
5. Tracking page              - "/tracking"            - GET
6. Contact                    - "/contact"             - GET


## === File details ===

1. node_modules directory - Contains all required packages.

2. public directory       - Contains images and stylesheets directory. 

   i. images directory       - Conatains all images.
   
      a. home directory     - Contains all home page related images.
	  b. landing directory  - Contains all landing page related images.
	  c. services directory - Contains all service page related images.
	  d. KronosNewIcon.png  - Navigation bar icon. 
	  
   ii. stylesheets directory - Contains all CSS files.
   
      a. bootstrap.min.css - Bootstrap CSS Framework file.
	  b. landing.css       - CSS file for landing page.
	  c. main.css          - CSS file for all the other pages. 

3. views directory        - Contains ejs templates for all pages. 
  
   i.   partials directory      - Contains header.ejs and footer.ejs templates (HTML Boilerplate).
   ii.  contact.ejs             - Contact page ejs template.
   iii. home.ejs                - Home page ejs template.
   iv.  landing.ejs             - Landing page ejs template.
   v.   services.ejs            - Services page ejs template.
   vi.  tracking.ejs            - Tracking page ejs template.
   vii. valueAddedSolutions.ejs - Value added solutions ejs template. 
   
4. info.md                - Contains all website related information.

5. main.js                - Server starting point. Contains all routes.

6. package-lock.json      - JSON file with information.

7. package.json           - JSON file with information.
	  
	  
	  
	  
	  
	  
	  
	  