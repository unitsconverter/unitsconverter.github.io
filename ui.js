const UNIT_TYPE_SELECTOR_TEMPLATE = '<p><a class="button" id="UNIT-ID">UNIT_TEXT</a></p>';
const UNIT_SELECTOR_TEMPLATE = '<p><a class="button" id="UNIT-ID">UNIT_TEXT</a></p>';

// Get all kinds of units and their units
// Add kinds of units to the selector
function loadUnits() {
    var unit_types = Qty.getKinds();
    unit_types.forEach(unit_type => {
        // Populate unit type selector
        unit_type_html = UNIT_TYPE_SELECTOR_TEMPLATE.replace('UNIT-ID', unit_type).replace('UNIT_TEXT', unit_type.replace('_', ' '));
        $('#units-types-container-column').append(unit_type_html);
        // Populate source and destination unit selector
        units = Qty.getUnits(unit_type);
        units.forEach(unit => {
            $('#src-unit').append(unit);
            $('#dst-unit').append(unit);
        });
    });
}

$(document).ready(function () {
    loadUnits();
});