let check_prime = 13;
let factor = 0;

for (let i = 0; i <= check_prime; i++) {

  check_prime % i == 0 ? factor++ : "";

}

factor == 5 ? console.log("Yes") : console.log("No");