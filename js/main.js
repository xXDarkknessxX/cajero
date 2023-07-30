var cuentas = [
    { nombre: "Mali", saldo: 200, contrasena: "passMali" },
    { nombre: "Gera", saldo: 290, contrasena: "passGera" },
    { nombre: "Maui", saldo: 67, contrasena: "passMaui" },
  ];
  
  var cuentaSeleccionada = null;
  
  function ingresarCajero() {
    document.getElementById("cajero").style.display = "block";
  }
  
  function verificarPassword() {
    var selectedAccount = document.getElementById("selectCuenta").value;
    var password = document.getElementById("password").value;
    
    // Verificar el password y seleccionar la cuenta
    if (password === cuentas[selectedAccount].contrasena) {
      cuentaSeleccionada = selectedAccount;
      document.getElementById("opciones").style.display = "block";
      document.getElementById("saldoActual").innerText = cuentas[cuentaSeleccionada].saldo;
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
    }
  }
  
  function consultarSaldo() {
    alert("El saldo actual de la cuenta es: $" + cuentas[cuentaSeleccionada].saldo);
  }
  
  function ingresarMonto() {
    var monto = prompt("Ingresa el monto a ingresar:");
    monto = parseInt(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido.");
    } else {
      cuentas[cuentaSeleccionada].saldo += monto;
      actualizarSaldoEnPantalla();
    }
  }
  
  function retirarMonto() {
    var monto = prompt("Ingresa el monto a retirar:");
    monto = parseInt(monto);
  
    if (isNaN(monto) || monto <= 0) {
      alert("Ingresa un monto válido.");
    } else if (monto > cuentas[cuentaSeleccionada].saldo) {
      alert("No tienes suficiente saldo para retirar esa cantidad.");
    } else if (cuentas[cuentaSeleccionada].saldo - monto < 10) {
      alert("No puedes dejar menos de $10 en la cuenta.");
    } else {
      cuentas[cuentaSeleccionada].saldo -= monto;
      actualizarSaldoEnPantalla();
    }
  }
  
  function actualizarSaldoEnPantalla() {
    document.getElementById("saldoActual").innerText = cuentas[cuentaSeleccionada].saldo;
  }
  