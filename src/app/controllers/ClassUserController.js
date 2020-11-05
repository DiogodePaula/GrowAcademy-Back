import ClassUser from '../models/ClassUser';

class ClassUserController {
  async index(req, res) {
    try {
      const classe = await ClassUser.findAll({});

      return res.json({ classe });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const classe = await ClassUser.findByPk(uid, {});

      return res.json({ classe });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const classe = await ClassUser.create(req.body);

      return res.json({ classe });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  // async update(req, res) {
  //   try {
  //     const { uid } = req.params;

  //     const classe = await ClassUser.update({ where: { uid } });

  //     return res.json({ classe });
  //   } catch (error) {
  //     return res.json({ error });
  //   }
  // }

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
