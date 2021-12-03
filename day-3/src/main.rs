use std::fs;
use std::str;

fn main() {
  let path = "./src/inputs.txt";
  println!("Hello, world!");
  let inputs: String = fs::read_to_string(path).expect("something went wrong with the file");
  let inputs_arr: Vec<&str> = inputs.split("\n").collect();
  for input in inputs_arr {
    let chars: Vec<char> = input.chars().collect();
    for c in chars {
      println!("{}",c);
    }
    println!("Inputs:\n{}", input);
  }
}
