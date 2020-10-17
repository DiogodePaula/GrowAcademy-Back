import Growdever from '../models/Growdever';

class GrowdeverController {
  async index(req, res) {
    try {
      const growdever = await Growdever.findAll({
        // attributes: ['uid', 'name', 'age', 'email', 'phone', 'type'],
        // include: [
        //   {
        //     model: Test,
        //     as: 'test',
        //     attributes: ['uid', 'matter', 'description'],
        //     include: [
        //       {
        //         model: Note,
        //         as: 'note',
        //         attributes: ['uid', 'note', 'description'],
        //       },
        //     ],
        //   },
        // ],
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
        // attributes: ['uid', 'name', 'age', 'email', 'phone', 'type'],
        // include: [
        //   {
        //     model: Test,
        //     as: 'test',
        //     attributes: ['uid', 'matter', 'description'],
        //     include: [
        //       {
        //         model: Note,
        //         as: 'note',
        //         attributes: ['uid', 'note', 'description'],
        //       },
        //     ],
        //   },
        // ],
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
