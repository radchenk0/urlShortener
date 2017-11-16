module Base62
    KEYS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.freeze
    KEYS_HASH = KEYS.each_char.with_index.inject({}) { |h, (k, v)| h[k] = v; h }
    BASE = KEYS.length
  
    # Encodes base10 number to base62 string.
    def self.encode(number)
        return '0' if number == 0
        return nil if number < 0
    
        str = ''
        while number > 0
            str = KEYS[number % BASE] + str
            number = number / BASE
        end
        str
    end
  
    # Decodes base62 string to a base10 number.
    def self.decode(str)
        number = 0
        i = 0
        len = str.length - 1
        while i < str.length
            pow = BASE**(len - i)
            number += KEYS_HASH[str[i]] * pow
            i += 1
        end
        number
    end
end