// Code before refactor
if (province == 'ONTARIO') {
  rate = ONTARIO_RATE;
  amt = base * ONTARIO_RATE;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
  rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
  amt = base * rate;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
  if (province == 'QUEBEC') {
      points = 2;
  }
} else {
  rate = 1;
  amt = base;
  calc = 2 * basis(amt) + extra(amt) * 1.05;
}

// Code after refactor
if (province == 'QUEBEC') points = 2;

rate =  province == 'ONTARIO' ? ONTARIO_RATE
      : province == 'QUEBEC' ? QUEBEC_RATE
      : province == 'ALBERTA' ? ALBERTA_RATE
      : 1;
amt = base * rate;
calc = 2 * basis(amt) + extra(amt) * 1.05;