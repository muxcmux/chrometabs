Use Chrometabs to easily add Chrome-like (yes, the browser) tabbed interfaces in you web apps.

## Usage
Simply call the `chrometabs` jQuery function on the container you want to add tabs to:

    $(document).ready(function() {
      $('#product-information').chrometabs();
    });
    
In order for Chrometabs to work, you will need a similar HTML structure:

    <div id="product-information">
      
      <nav>
        <ul>
          <li><a href="#"><span>Tab 1</span></a></li>
          <li><a href="#"><span>Tab 2</span></a></li>
          <li><a href="#"><span>Tab 3</span></a></li>
        </ul>
      </nav>
      
      <div>
        Content for Tab 1
      </div>
      <div>
        Content for Tab 2
      </div>
      <div>
        Content for Tab 3
      </div>
      
    </div>

## Configuration
Chrometabs is small and simple and does not provide many configuration options. All are self explanatory:

    $(document).ready(function() {
      $('#product-information').chrometabs({
        hoverClass: 'hover',
        activeClass: 'active',
        selectedClass: 'selected',
        containerClass: 'chrometabs'
      });
    });

## Browser support
I've tried Firefox 6/7, Opera 11, Safari 5 and of course Chrome 12. All tests done under Mac OSX 10.7.1. Due to lack of a Windows machine, I am unable to run any tests on IE (any version), so please feel free to download, test and leave feedback.

## License
Use, modify, sell and do whatever you want at your own risk.