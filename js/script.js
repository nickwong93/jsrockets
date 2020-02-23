var car = {
			make: 'Toyota',
			type: 'Vios',
			color: 'silver',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: [
			'seat 1',
			'seat 2',
			'seat 3',
			'seat 4'
			],
			turnOn: function () {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn)
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			},
			changeCar: function (col){
				alert('color is'+col)
				if (col == true){
					this.color = 'orange';
				} else {
					this.color = 'black';
				}
			}
		}

		console.log('hello there friends')