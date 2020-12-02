import Classe from '../models/Classe';

class ClasseController {
  async index(req, res) {
    try {
      const classe = await Classe.findAll({});

      return res.json({ classe });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const classe = await Classe.findByPk(uid, {});

      return res.json({ classe });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const classe = await Classe.create(req.body);

      return res.json({ classe });
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

      const classe = await Classe.update({ where: { uid } });

      return res.json({ classe });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Classe.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new ClasseController();
