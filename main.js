// import a CSS module
import './main.scss';
import $ from 'jquery';

export default () => {

  $(function () {
    const $tab = $('[role="tab"]'),
    $tabpanel = $('[role="tabpanel"]');

    $tab.on('click', function() {
      const $this = $(this),
      thisSelected = $this.attr('aria-selected'),
      thisControls = $this.attr('aria-controls'),
      $visibleTabPanel = $('#' + thisControls);

      if (thisSelected === 'true') {
        return;
      }

      $tab.attr('aria-selected', false);
      $this.attr('aria-selected', true);
      $tabpanel.attr('aria-hidden', true);
      $visibleTabPanel.attr('aria-hidden', false);
    });
  });

}

