import jwt from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class AuthController {
  async store(req, res) {
    try {
      const { login, password } = req.body;

      const user = await User.findOne({ where: { login } });

      if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado' });
      }

      if (!(await user.checkPassword(password))) {
        return res.status(401).json({ error: 'Senha Invalida' });
      }

      const { uid, name, type } = user;

      return res.json({
        user: {
          uid,
          name,
          login,
          type,
        },

        token: jwt.sign({ uid, type }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new AuthController();
