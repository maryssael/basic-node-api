require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const errors = require('../../shared/helper/errors/errors');
const BaseService = require('../../shared/base/BaseService');

class AuthService extends BaseService {
  async signup({ data }) {
    try {
      const { username, password } = data;

      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await this.repository.create({
        data: {
          username,
          password: hashedPassword
        }
      });

      return user;
    } catch (err) {
      throw err;
    }
  }

  async login({ username, password }) {
    const user = await this.repository.getUserByUsername({ username });

    if (!user) {
      throw errors.auth.invalidUserInformation();
    }

    if (!await bcrypt.compare(password, user.password)) {
      throw errors.auth.invalidUserInformation();
    }

    const jwtPayload = {
      id: user.id,
      username: user.username
    };

    const accessToken = jwt.sign(
      jwtPayload,
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '12h', audience: 'user' }
    );

    return { accessToken };
  }
}

module.exports = AuthService;
