export default {
  port: 5000,
  dbUri: 'mongodb://127.0.0.1:27017/rest-api-tutorial',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',

  publicKey: `-----BEGIN PUBLIC KEY-----
MIIBITANBgkqhkiG9w0BAQEFAAOCAQ4AMIIBCQKCAQBgBCeQrBiP46/DxCqrsrlE
W5yg4KkYImYbn7Zp2d4pU4eua4UNKgujzwaAWxiTOLBsZi9oxxirXzKlBqaU/3wr
X+4PueOO4QpjjVyLycQAZgLp/djHX64dJ3ZCdFf6U7zpTjxx7hEZodt1mteuU61j
NOxxGDbWNhTQt+SvWoTAhvCAQIArgOgZjAtopNlXfvs4VHP+OZAkx3Szo2kwHrA5
+Ed5Jg/jJUoNV3PMRj7AGijNKhxAg5rynsPYfnNGVIfiJ40nf21L4eHYPcDBYuS7
Y0GzH3iBgFMP62WUw5vBZCIcWDyIz2/i16tm4ez3vOR+DcV+ZtMmEDGGPIkQpjzz
AgMBAAE=
-----END PUBLIC KEY-----`,
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBgBCeQrBiP46/DxCqrsrlEW5yg4KkYImYbn7Zp2d4pU4eua4UN
KgujzwaAWxiTOLBsZi9oxxirXzKlBqaU/3wrX+4PueOO4QpjjVyLycQAZgLp/djH
X64dJ3ZCdFf6U7zpTjxx7hEZodt1mteuU61jNOxxGDbWNhTQt+SvWoTAhvCAQIAr
gOgZjAtopNlXfvs4VHP+OZAkx3Szo2kwHrA5+Ed5Jg/jJUoNV3PMRj7AGijNKhxA
g5rynsPYfnNGVIfiJ40nf21L4eHYPcDBYuS7Y0GzH3iBgFMP62WUw5vBZCIcWDyI
z2/i16tm4ez3vOR+DcV+ZtMmEDGGPIkQpjzzAgMBAAECggEAGGFVro2UWw0Ed2Ab
OafTFUFx3wPMy/0IEmGWjwAsQjAclrRkf3g6pmiODQ+UiOVvHsc/qIpNgE5W7MJo
kBLjc5wTNdkMqB4KZkbhxfkAlN1SRhoX7mAkNPDtPWiPYlfa8x7TiFZb7zdDI3Si
6XgD4dnxY7IzUmc/F9Rp9AC3Dq+juJIUCzfJZu9iGjSpCfoyi0ARjw6rJw9iB1xA
GlB/X1TycHNt0EnjKpXH+nW6b9+dFqZvQSVk3DUsa5wNX+j1X6pWJtFACUSG6ntz
/xcpR3+kwK6iQAikD/IvFrvsB3pSwIG5ozPszxxkIJ2HrBF/4+PQOjbmiBW/Trnx
NE4EUQKBgQC/GPfmJTDB5oc8Imjer3XBaQWcNmtw0wM0a0/HKfpsFHbFteCaXYwu
QqHPAKoVNVhEfmBt3T0H6Ve6iNtslqHObJeKJ0cEyOv9uy1Oi9whB/f2L1a6u8wy
BnC2MsyWkNSwGwffkULvyS6BtB7IRcilnzgchMf1DqvrHKUSL8JG2wKBgQCAoFBk
SO1UigwxeYrkyU6s15ciQEGHDkkWgR51seQuvCs5KTiYH8cs+8jJqpXy58BDAXYa
Y0QFRCptrXhWLKec8ZMu/u/0DI8YK/sSISvfNk4EFVLDytvdF/eF8LXELAwoSgKI
61dFy6Wi6AKwXq31SMVxn8chbQ8mqysiLA1ByQKBgFBdRruRvlx8/zhp3CJyNZpd
+U8Fj8+F3h4oVweR/s9/F6fz4f3pA2/c88FjLSP4KCO95f2uAeGW3x8COQ0EmA2A
m4YtGG/Js30kP1x98tgtSrlMlTO4kJolHTdyS5myVM+uvnPl2fmPaLCBOETPHB+S
wv0zVggX4HLivATW8uPrAoGASNwGjbftj7yeyYuijJQnV6rLdmBVfe4uomvDWEHL
EloOVdOutiUSCr4Y73sMc0qpUotKXgoqpp0FN5lSl+W1kCYbDDzmqSRQDg4jqxJV
Kpw1NwTpG/UV87g2wo0mORgGTvAVXX+JsQR5L70igMsw2Mc+6GzsPFfthCbjSPkR
DVkCgYAN6P5Miwnnp5ewMYfS0/42eZ2M9PF/EOtGFL+G/ggdydqNCNFLrDzA1vQG
gOnfg3pzHs0eQN62iyUzGYWwkc0efZDi7NCHwC97sTPDz40k5Jro/bLvNsEw3/OA
URxnmDD121MSNWNNK+ND5/8FXoDcI2M1us0qNrQymnoLfXIaGA==
-----END RSA PRIVATE KEY-----`,
  useDatabase: false,
};
