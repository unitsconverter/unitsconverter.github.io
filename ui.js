const UNIT_SELECTOR_TEMPLATE = '<p><a class="button unit-button" id="UNIT-ID">UNIT_TEXT</a></p>';

// Get all kinds of units and their units
// Add kinds of units to the top bar
function loadUnits() {
    var units = Qty.getKinds();
    units.forEach(unit => {
        unit_type = UNIT_SELECTOR_TEMPLATE.replace('UNIT-ID',unit).replace('UNIT_TEXT',unit.replace('_',' '));
        $('#units-types-container-column').append(unit_type);
    });
}

$(document).ready(function () {
    loadUnits();
});