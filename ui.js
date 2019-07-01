const BUTTON_SELECTOR_TEMPLATE = '<div class="col-3 is-text-center is-vertical-align"><a class="button primary unit-type-button is-full-width" id="BUTTON-ID">TEXT</a></div>';
const SRC_UNIT_BUTTON_SELECTOR_TEMPLATE = '<div class="col-3 is-text-center is-vertical-align src-unit-button"><a class="src-unit-button button primary unit-type-button is-full-width" id="BUTTON-ID">TEXT</a></div>';
const DST_UNIT_BUTTON_SELECTOR_TEMPLATE = '<div class="col-3 is-text-center is-vertical-align dst-unit-button"><a class="dst-unit-button button primary unit-type-button is-full-width" id="BUTTON-ID">TEXT</a></div>';

var src_unit = null;
var dst_unit = null;

// Get all kinds of units and their units
// Add kinds of units to the selector
function loadUnitsTypes() {
    var unit_types = Qty.getKinds();
    unit_types.shift();
    unit_types.forEach(unit_type => {
        // Populate unit type selector
        unit_type_html = BUTTON_SELECTOR_TEMPLATE.replace('BUTTON-ID', unit_type).replace('TEXT', unit_type.replace('_', ' '));
        $('#unit-type-selector').append(unit_type_html);
    });
}

function loadUnits(unit_type) {
    // Populate source and destination unit selector
    units = Qty.getUnits(unit_type);
    units.forEach(unit => {
        // Populate unit type selector
        src_unit_html = SRC_UNIT_BUTTON_SELECTOR_TEMPLATE.replace('BUTTON-ID', unit).replace('TEXT', unit.replace('_', ' '));
        $('#src-unit-selector').append(src_unit_html);
        dst_unit_html = DST_UNIT_BUTTON_SELECTOR_TEMPLATE.replace('BUTTON-ID', unit).replace('TEXT', unit.replace('_', ' '));
        $('#dst-unit-selector').append(dst_unit_html);
    });
}

jQuery.fn.extend({
    animate_text: function (text) {
        $(this).hide()
        $(this).html(text);
        $(this).fadeIn(600);
    }
})

$(document).ready(function () {

    loadUnitsTypes();

    $('.unit-selector').hide();
    $('.src-unit-label').hide();
    $('.dst-unit-label').hide();

    $('.unit-type-button').click(function (e) {
        unit_name = this.id.replace('_', ' ');
        $('#unit-type-label').animate_text(unit_name);
        $('#unit-type-selector').slideUp();
        loadUnits(this.id);
        $('#src-unit-selector').fadeIn();
    });

    $(document).on('click', '.src-unit-button', function (e) {
        src_unit = this.id;
        $('#src-unit-label-unit').text(this.text);
        $('.src-unit-label').fadeIn();
        $('.src-unit-button').not(this).fadeOut();
        $('.src-unit-label').fadeIn();

    });

    $(document).on('click', '.src-unit-button', function (e) {
        src_unit = this.id;
        $(this).addClass('selected');
        $('.src-unit-label-unit').text(this.text);
        $('.src-unit-label').fadeIn();
        $('#src-unit-selector').fadeOut();
    });

    $(document).on('click', '.dst-unit-button', function (e) {
        dst_unit = this.id;
        $(this).addClass('selected');
        $('.dst-unit-label-unit').text(this.text);
        $('.dst-unit-label').fadeIn();
        $('#dst-unit-selector').fadeOut();
    });

    $('#src-value').on('keypress',function(){
        src_value = $(this).val();
        console.log(src_value);
    });

});