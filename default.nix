let
  pkgs = import <nixpkgs> {};
in pkgs.stdenv.mkDerivation {
  name = "fussel.space";
  src = ./.;
  buildInputs = with pkgs; [ git hugo ];
  buildPhase = "hugo";
  installPhase = "mkdir --minify -p $out && cp -r public/* $out";
}
