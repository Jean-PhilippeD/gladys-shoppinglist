/**
* Gladys Project
*/

/**
* ShoppingList.js
* @param td : total days cumulated between each time user put the item in the list
* @param nc : number of command
* The both parameters td and nc permit to count the median frequency between each time the user put the item in list
*/

module.exports = {
  attributes: {

      item: {
          type: 'string',
          required: true
      },

      td: {
          type: 'integer',
          required: true,
					defaultsTo: 0
      },

			nc: {
				type: 'integer',
        required: true,
				defaultsTo: 0
      },

			datetime: {
				type: 'datetime',
				required: true
			},

  },

	beforeValidate: function(values, cb) {
		var now = new Date();
		values.nc += 1
		// If no datetime is set, set to actual time
    if (!values.datetime) {
      values.datetime = now
    } else {
			var lastDate = new Date(values.datetime);
			lastDate = lastDate.getTime();
			var timeSince = (now.getTime() - lastDate) / 86400000;
			values.td += timeSince;
		}

		cb();
 	}
};
