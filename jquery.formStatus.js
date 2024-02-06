/**
 * Simple jQuery Plugin to manipulate the status of (mostly) Ajax Forms
 */

(function ($) {
  // Array of valid status types
  let validStatuses = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
  ];

  // Status function to display messages with different styles
  ($.fn.status = function (message, status) {
    // Validate and set a default status if necessary
    if (!validStatuses.includes(status)) {
      console.warn("Invalid status provided. Defaulting to 'secondary'.");
      status = "secondary";
    }

    // Find or create the status element
    let $status = $(this).find(".status");
    if ($status.length === 0) {
      // Create the status element if not present
      createStatusElement.call(this);
      $status = $(this).find(".status");
    }

    // Hide the status, set text, class, and icon, then fade it in
    $status.hide();
    $status.find(".text").text(message);
    $status.removeClass().addClass("alert status alert-" + status);

    switch (status) {
      case "primary":
        $status
          .find("span.icon")
          .removeClass()
          .addClass("icon fa fa-chevron-circle-right");
        break;

      case "secondary":
        $status
          .find("span.icon")
          .removeClass()
          .addClass("icon fa fa-chevron-right");
        break;

      case "success":
        $status.find("span.icon").removeClass().addClass("icon fa fa-check");
        break;

      case "danger":
        $status
          .find("span.icon")
          .removeClass()
          .addClass("icon fa  fa-exclamation-circle");
        break;

      case "warning":
        $status.find("span.icon").removeClass().addClass("icon fa fa-warning");
        break;

      case "info":
        $status.find("span.icon").removeClass().addClass("icon fa fa-bullhorn");
        break;
    }
    $status.fadeIn(500);
    return this; // Make it chainable
  }),
    // Hide method to hide the status element with optional fade
    ($.fn.hideStatus = function (fade = false) {
      if (fade === true) $(this).find(".status").fadeOut(500);
      else $(this).find(".status").hide();
      return this; // Make it chainable
    }),
    // Show method to show the status element with optional fade
    ($.fn.showStatus = function (fade = false) {
      if (fade === true) $(this).find(".status").fadeIn(500);
      else $(this).find(".status").show();
      return this; // Make it chainable
    }),
    ($.fn.resetStatus = function (hide = false) {
      $(this).status("", "secondary");
      if (hide === true) {
        $(this).hideStatus();
      }
    }),
    // Shake method to add a visual shake effect to the status element
    ($.fn.shakeStatus = function (duration = 500, distance = 10, times = 3) {
      for (let i = 0; i < times; i++) {
        let status = $(this).find(".status");
        status
          .animate({ marginLeft: `+=${distance}px` }, duration / (times * 2))
          .animate({ marginLeft: `-=${distance * 2}px` }, duration / times)
          .animate({ marginLeft: `+=${distance}px` }, duration / (times * 2));
      }
      return this; // Make it chainable
    });

  // Function to create the status element
  function createStatusElement() {
    let statusUI = `<div class="alert status" role="alert">
        <span class="icon fa fa-check">&nbsp;</span> 
        <span class="text">&nbsp;</span>
      </div>`;
    if ($(this).find(".status_container").length === 0) {
      $(this).append(statusUI);
    } else {
      $(this).find(".status_container").html(statusUI);
    }
  }
})(jQuery);
