import Growdever from '../models/Growdever';
import User from '../models/User';
import ClassUser from '../models/ClassUser';

class GrowdeverController {
  async index(req, res) {
    try {
      const growdever = await Growdever.findAll({
        attributes: ['uid', 'email', 'phone', 'program'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['uid', 'matter', 'description'],
          },
          {
            model: ClassUser,
            as: 'growdev',
            attributes: ['uid', 'status'],
          },
        ],
      });

      return res.json({ growdever });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const growdever = await Growdever.findByPk(uid, {
        attributes: ['uid', 'email', 'phone', 'program'],
        include: [
          {
            model: User,
            as: 'user',
            attributes: ['uid', 'matter', 'description'],
          },
          {
            model: ClassUser,
            as: 'growdev',
            attributes: ['uid', 'status'],
          },
        ],
      });

      return res.json({ growdever });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const growdever = await Growdever.create(req.body);

      return res.json({ growdever });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const growdever = await Growdever.update({ where: { uid } });

      return res.json({ growdever });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Growdever.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new GrowdeverController();
