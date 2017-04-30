var dispatcher = new Dispatcher();

var itemStore = {
items:[]
};  
function listener(payLoad){
switch(payload.actionName){
case 'CREATE_ITEM':
itemStore.items.push(payload.actionData);
itemStore.trigger('change');
break;
}
}
dispatcher.register(listener);

<button onClick = {this.createNewItem}>Create Item</button>

createNewItem(event){
var action = {
    actionName:'CREATE_ITEM',
    actionData:{itemName:'item1',itemId:'1'}
};
dispatcher.dispatch(action);
}