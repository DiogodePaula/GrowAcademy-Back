import ClassUser from '../models/ClassUser';
import Classe from '../models/Classe';
import Growdever from '../models/Growdever';

class ClassUserController {
  async index(req, res) {
    try {
      const classeUser = await ClassUser.findAll({});

      return res.json({ classeUser });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const classeUser = await ClassUser.findByPk(uid, {
        attributes: ['uid', 'login', 'enable', 'verified'],
        include: [
          {
            model: Classe,
            as: 'classes',
            attributes: ['status'],
          },
          {
            model: Growdever,
            as: 'growdevers',
            attributes: ['name', 'email', 'phone', 'program'],
          },
        ],
      });

      return res.json({ classeUser });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const classeUser = await ClassUser.create(req.body);

      return res.json({ classeUser });
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

      const classeUser = await ClassUser.update({ where: { uid } });

      return res.json({ classeUser });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await ClassUser.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ClassUserController();
