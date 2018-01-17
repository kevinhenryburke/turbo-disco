({
	packItem : function(component, event, helper)  {
	    // Get the campingListItem from the component
        var campingListItem = component.get("v.item");
        // Now set the checkbox on the campingListItem to true
        campingListItem.packed__c = true;
        // Now set the item back back onto the component
        component.set("v.item", campingListItem);

        event.getSource().set("v.disabled", "true");		
	}
})