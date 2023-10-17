"""added association table

Revision ID: 27b9e18d506a
Revises: b375c54b4e70
Create Date: 2023-10-06 12:59:28.081054

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '27b9e18d506a'
down_revision = 'b375c54b4e70'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('player_coach_association',
    sa.Column('player_id', sa.Integer(), nullable=True),
    sa.Column('coach_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['coach_id'], ['coaches.id'], name=op.f('fk_player_coach_association_coach_id_coaches')),
    sa.ForeignKeyConstraint(['player_id'], ['players.id'], name=op.f('fk_player_coach_association_player_id_players'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('player_coach_association')
    # ### end Alembic commands ###
